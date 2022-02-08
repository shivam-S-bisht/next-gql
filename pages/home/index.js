import { gql } from "@apollo/client"
import Link from "next/link"
import client from "../../apollo-client"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
// import { GET_ALL_USERS_AND_TODOS } from "../../gql/queries/get-all-users-and-todos"

function Home() {

    const GET_COUNTIRIES = gql`
    query Countries {
        countries {
          code
          name
          emoji
        }
      }`

    const [countries, setCountries] = useState([])
    const router = useRouter()
    const dynamicRouteId = useRef()

    useEffect(function () {
        console.log("wefionwefoinwrgoinwrgoinwroignwroign")
    }, [])

    async function handleOnClick(){
        client.query({
            query: GET_COUNTIRIES
        }).then(res=>{
            setCountries(res.data.countries)
        })
    }

    function handleSubmitForm (e) {
        e.preventDefault()
        router.push(`dynamic/${dynamicRouteId.current.value}`)
        dynamicRouteId.current.value = ""
    }

    return (
        <>
            <button onClick={handleOnClick} style={{display: "block"}}>Fetch Countries</button>
            <button style={{display: "block"}}><Link href="/image">Image</Link></button>
            <form onSubmit={handleSubmitForm}>
                <input type="text" ref={dynamicRouteId} placeholder="Enter an id" />
                <input type="submit" value="Submit" />
            </form>
            {
                countries?.map((country, idx) => {
                    return (
                        <div key={idx} style={{border: "1px solid red", display: "inline-block", margin: 10}}>
                            <p style={{display: "inline-block", margin: "0px 10px"}}>{country.code}</p>
                            <p style={{display: "inline-block", margin: "0px 10px"}}>{country.name}</p>
                            <p style={{display: "inline-block", margin: "0px 10px"}}>{country.emoji}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Home