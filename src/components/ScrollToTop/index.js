import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
    const { pathname } = useLocation();

    /* quando o pathname ( rota do navegador ) mudar, ele vai executar o useEffect, fazendo com que a página escrole para o topo,
    previnindo ela de ficar na mesma posição que a página anterior */

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
    
    return null
}

export default ScrollToTop