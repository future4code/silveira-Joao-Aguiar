export const goToDetailPage = (nav:any,id: number | string)=> {
    nav(`/details/${id}`)
}

export const goToMainPage = (nav:any)=> {
    nav(`/`)
}