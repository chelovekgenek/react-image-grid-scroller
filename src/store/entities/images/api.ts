import { getRecentPhotos } from "helpers"

export const getRecent = async () => (await getRecentPhotos()).body
