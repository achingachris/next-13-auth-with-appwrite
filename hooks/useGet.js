import useSWR from "swr"
import { get } from "../utils"

const useGet = url => useSWR(url, get)

export default useGet
