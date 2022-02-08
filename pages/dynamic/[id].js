import { useRouter } from 'next/router'


function Dynamic () {

    const router = useRouter()
    const {id} = router.query

    return `This page is passed with the route ${id}`
}

export default Dynamic