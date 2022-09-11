import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiChiliPepper } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


function Category() {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
            <FaPizzaSlice/>
            <h4>Italain</h4>
        </SLink>
        <SLink to={'/cuisine/american'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </SLink> 
        <SLink to={'/cuisine/indian'}>
            <GiChiliPepper/>
            <h4>Indian</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494944, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        margin-top: 0.5rem;
        color: #ffffff;
        font-size: 0.6rem;
    }
    svg{
        color: white;
        font-size: 2rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121 , #e94057);
    }
`

export default Category



