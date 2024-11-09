import React from 'react'
import './Header.scss'
import Card from '../Card/Card'

const Header = () => {
  return (
    <>
    <h1>Catalog Kids & Yarik</h1>



    <div className="wrap">
        <Card  title="Fly Childrens"   photo="/Card.1.png"  price="666$" />
        <Card  title="Летающие Дети"  photo="/Card.2.png"  price="8814$"/>
        <Card title="Джалоптус"  photo="/Card.3.png"  price="52$"/>
        <Card title="Разриздяй"  photo="/Card.4.png"  price="69$"/>
        <Card/>
    </div>
    </>
  )
}

export default Header