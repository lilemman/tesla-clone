import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        BackgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
        />

        <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        BackgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
        />

        <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        BackgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"/>
         
        <Section 
        title="Model x"
        description="Order Online for Touchless Delivery"
        BackgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"/>
        <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        BackgroundImg="solar-panel.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"/>
        <Section 
        title="Solar for New Roof"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        BackgroundImg="solar-roof.jpg"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"/>
        <Section 
        title="Accessories"
        description=""
        BackgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        />
        

    </Container>
  )
}

export default Home

const Container=styled.div`
height:100vh;

`