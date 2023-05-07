export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:1337'
//http://localhost:1337

/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image
 */


export const fromImageToUrl = (image) => {
    if (!image || !image.attributes) {
        return "vercel.svg"
    }
    return `${API_URL}${image.attributes.url}`
}