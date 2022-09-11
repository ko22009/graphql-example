import {useCharactersQuery} from "./generated/graphql";

const Characters = () => {
    const {data, loading, error} = useCharactersQuery()
    if (error) {
        return <>error</>
    }
    if (loading) {
        return <>loading...</>
    }
    if (!data) {
        return <>empty</>
    }
    return <><ul>{data.characters?.results?.map(el => <li key={el?.name}>{el?.name}</li>)}</ul></>
}

export default Characters;