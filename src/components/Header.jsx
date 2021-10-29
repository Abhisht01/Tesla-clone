import React,{useState} from 'react';
import styled from 'styled-components';
import {default as MenuIcon} from "@material-ui/icons/Menu";
import {default as CloseIcon} from "@mui/icons-material/Close";
import './Home.css';
import {selectCars} from "../features/Car/Carslice";
import {useSelector} from 'react-redux';

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
const Header = () => {
    const [burgstat, setburgstat]= useState(false);
    const cars = useSelector(selectCars)
    return (
        <Container>
           
            <a>
               <h2 className="ti1"> TESLA &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h2>
            </a>
            <Menu>
                {cars && cars.map((car, index) =>(
                    <p><a key={index} href="#">{car}</a></p>
                ))}
              
            </Menu>
            <RMenu>
                <a href="#">Shop &nbsp;</a>
                <a href="#" >Tesla Account</a>
                <CustomMenu onClick={()=>setburgstat(true)}/>
            </RMenu>
            
            <BurgNav show={burgstat}>
                <CloseWrapper>
                <CustomClose onClick={()=>setburgstat(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) =>(
                    <li  key={index}><a href="#">{car}</a></li>
                ))}
              
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadster</a></li>
                
            </BurgNav>
        </Container>
    );
}
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left:0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: center;
p{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
@media(max-width: 768px) {
    display: none;
}
`
const BurgNav = styled.div`
position:fixed;
top:0;
bottom:0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style:none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.25s; 
li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    a{
        font-weight: 600;
    }
}
`

const RMenu = styled.div`
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 35px;
    flex-wrap: nowrap;
}
}
`
const CustomMenu= styled(MenuIcon)`
 cursor: pointer;
`
const CustomClose = styled(CloseIcon)`

`
export default Header
