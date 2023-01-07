import api from '../api/github'
import { useQuery, QueryFunctionContext } from '@tanstack/react-query'
import { Repository } from './types'

const fetchRepos = async (ctx: QueryFunctionContext) => {
    const [ _, githubUser ] = ctx.queryKey
    const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`)
    return data
}

export const useFetchRepos = (githubUser: string) => {
    return useQuery(['repos', githubUser], fetchRepos)
}