import React from 'react'
import { SearcherWrapper } from '../../styles/SearcherWrapper';

const Searcher = () => {

    const [values, setValues] = React.useState({
        location: "",
        dates: "",
        });

        function handleSubmit(evt) {

            evt.preventDefault();

        }

    function handleChange(evt) {

        const { target } = evt;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };
        
        setValues(newValues);
    }

    
    return (
        <SearcherWrapper>
            <h2>Busca ofertas en hoteles, casas y mucho más</h2>

            <form onSubmit={handleSubmit}>
                
                <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Buenos Aires, Argentina"
                    value={values.location}
                    onChange={handleChange}
                />
                
                <input
                    id="dates"
                    name="dates"
                    type="date"
                    placeholder="Check in - Check out"
                    value={values.dates}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
    </form>

        </SearcherWrapper>
    )
}

export default Searcher