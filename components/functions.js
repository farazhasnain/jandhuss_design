const setNavbarSelection = (v) => {
    const elements = document.getElementById('navbarCollapse')?.children[0]?.children
    //elements?.classList.remove('active')
    for(var i= 0; i< 5; i++) {
        if(elements != undefined) {
        elements[i].classList.remove('active')
        }
    }
    elements[v].classList.add('active')
}

export {
    setNavbarSelection
}