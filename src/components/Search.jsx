import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
const [input, setInput] = useState("");
const [checkedDairy, setCheckedDairy] = useState(false);
const [checkedEgg, setCheckedEgg] = useState(false);

const handleChangeDairy = () => {
  setCheckedDairy(!checkedDairy);
};

const handleChangeEgg = () => {
  setCheckedEgg(!checkedEgg);
};

const navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault();
    if(checkedDairy){
      navigate(`/searched/${input}&intolerances=dairy`);
    } else if(checkedEgg){
      navigate(`/searched/${input}&intolerances=egg`);
    } else if(checkedEgg == true && checkedDairy == true){
      navigate(`/searched/${input}&intolerances=dairy,egg`);

    } else{
      navigate('/searched/'+input);

    }
};

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>

      <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value) }type="text" value={input} />
<AllergenSection>
    <h5>Exclude allergens:</h5>
            <Checkbox
        label="Dairy"
        value={checkedDairy}
        onChange={handleChangeDairy}
      />
      <Checkbox
        label="Egg"
        value={checkedEgg}
        onChange={handleChangeEgg}
      />
      </AllergenSection>
      </div>
    </FormStyle>
    )
}

const Checkbox = ({ label, value, onChange }) => {
    return (
      <Flex>
              {label}

      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
      </label>

      </Flex>
    );
  };

const FormStyle = styled.form`
    margin: 0;
    
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg{
        transform: translate(1.5rem, 2.75rem);
                color: white;
    }
`;

const Flex = styled.div`
    display:flex;
    flex-direction: row;

    align-items:center;
    align-content:center;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
`;

const AllergenSection = styled.div`
margin-top: 0.75rem;
`;

export default Search