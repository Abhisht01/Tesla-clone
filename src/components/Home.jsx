import React from 'react';
import styled from 'styled-components';
import Sections from './Sections';

let Container = styled.div`
    height: 100vh;
`;
const Home = () => {
    return (
        <Container>
            <Sections title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundi="https://tesla-view.thron.com/api/xcontents/resources/delivery/getThumbnail/tesla/550x507/e1119f8c-19a5-4b54-8d74-139e991752a5.jpg?v=49&dpr=125"
            leftbin="Custom order"
            rightbin="Existing Inventory"/>
            <Sections title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundi="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/56856035-ba4e-4f29-907e-f5a81a640336/bvlatuR/std/550x507/ModelY_03?lcid=6092d5ae-105b-46f0-9422-6cfd2a72a328&v=25&dpr=125"
            leftbin="Custom order"
            rightbin="Existing Inventory"/>
            <Sections title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundi="https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            leftbin="Custom order"
            rightbin="Existing Inventory"/>
            <Sections title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundi="https://media.gettyimages.com/photos/new-tesla-model-x-crossover-suv-is-displayed-on-september-29-2015-in-picture-id490597842?k=20&m=490597842&s=612x612&w=0&h=dKLFnFknUxmIsMZAJeEM3aD9fBVumbgyxvNle2r3h10="
            leftbin="Custom order"
            rightbin="Existing Inventory"/>
            <Sections 
              title="Lowest Cost Solar Panels in America"
              description="Money-back Guarantee"
              backgroundi="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/010f69c3-2754-4d8d-86a5-72280c7bd901/bvlatuR/std/550x507/SolarPanels_03?lcid=4934a274-728f-44ab-8c19-c533c8b894de&v=25&dpr=125"
              leftbin="Order now"
              rightbin="Learn more"
            />
               <Sections 
              title="Solar for New Roofs"
              description="Solar Roof Costs Less Than a New Roof"
              backgroundi="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/fa2b3be2-d836-4741-938d-4b504623ca70/bvlatuR/std/550x507/SolarPanels_02?lcid=4934a274-728f-44ab-8c19-c533c8b894de&v=25&dpr=125"
              leftbin="Order now"
              rightbin="Learn more"
            />
             <Sections 
              title="Accessories"
              description=""
              backgroundi="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/f0c386e7-3e84-4b1e-8afa-f1c44b2767cd/bvlatuR/std/550x507/HomeCharging_02?lcid=ad5c97cb-dd55-4343-a8d7-b0660a1be424&v=25&dpr=125"
              leftbin="Shop Now"
              
            />
        </Container>
    );
}

export default Home
