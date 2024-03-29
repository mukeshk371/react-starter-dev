import styled from "styled-components";

export const CustomTabStyles = styled.div`
.customNavbar {
    button {
        background: #fff;
        min-width: 150px;
        margin-right: 20px;
        min-height: 40px;
        color: #198754;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: solid 1px #198754;
        
        &.active, &:hover {
            background: #198754;
            color: #fff;
        }
    }
}
`;