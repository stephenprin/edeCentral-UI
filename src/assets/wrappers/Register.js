import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  h2 {
    display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
    font-size: 1.3rem;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color:#842029;
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper;