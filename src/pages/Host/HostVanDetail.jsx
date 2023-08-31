import React from "react"
import css from "./HostVanDetail.module.css"
import { useOutletContext } from "react-router-dom"

export default function HostVanDetail() {
    const { currentVan } = useOutletContext()
    
    return (
        <section className={css.host_van_detail_info}>
            <h4>Name: <span>{currentVan.name}</span></h4>
            <h4>Category: <span>{currentVan.type}</span></h4>
            <h4>Description: <span>{currentVan.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}