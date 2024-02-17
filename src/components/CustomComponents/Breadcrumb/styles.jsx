import styled from "styled-components";

export const BreadcrumbStyles = styled.div`
.breadcrumb-custom {
    background-color: #563d7c;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    >div {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);

        strong {
            color: #fff;
        }
    }
}

.breadcrumb {
    height: 48px;
    padding: 0 12px;
    margin: 0;
    display: flex;
    align-items: center;
    list-style: none;

    &-item {
        display: inline-block;

        &::before {
            display: inline-block;
            padding: 0 20px;
            color: #6c757d;
        }

        &:first-of-type {
            &::before {
                display: none;
            }
        }

        &.active {
            color: #fff;

            span {
                font-weight: 500;
            }
        }

        a {
            color: #cbbde2;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
                color: #fff;
            }
        }
    }
}
`;