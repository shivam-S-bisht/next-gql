import { useLazyQuery, gql } from "@apollo/client"
import client from "../../apollo-client"
import { useState } from "react"
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
    // const [getCountries, { loading, data }] = useLazyQuery(GET_COUNTIRIES)
    const [countries, setCountries] = useState([])

    const handleOnClick = async () => {
        client.query({
            query: GET_COUNTIRIES
        }).then(res=>{
            console.log(res)
            setCountries(res.data.countries)
        })
    }

    return (
        <>
            <button onClick={handleOnClick} style={{display: "block"}}>Fetch Countries</button>
            {
                countries?.map((country, idx) => {
                    console.log(country)
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