import { useEffect, useState } from "react";

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    const getSearchDetails = () => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
            .then(res => res.json())
            .then(json => {setSearchResult(json); 
            })
    }

    useEffect(() => {
            getSearchDetails();
    }, [searchValue]);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSearch = () => {
        getSearchDetails();
    }
    const playAudio = (audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.play();
      };
    return (
        <>
            <div className="container" style={{ width: '40rem', height: '20rem' }}>
                <div className="search-box">
                    <div className="input-group">
                        <div className="form-outline" data-mdb-input-init>
                            <input type="search" id="form1" className="form-control" value={searchValue} onChange={handleInputChange} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSearch}>
                            Search for a word
                        </button>
                    </div>
                </div>
            </div>

            {searchResult.length>0 &&(
                <div>
                    <h2>Word {searchResult[0].word}</h2>
                    <ul>
                        {searchResult[0].meanings.map((meaning, index) => (
                            <li key={index}><p>Definitions:</p>
                                <ul>
                                    {meaning.definitions.map((definition, id) => (
                                        <li key={id}>{definition.definition}</li>
                                    ))}
                                </ul> 
                            </li>
                        ))}
                         {searchResult[0].phonetics.length > 0 && (
                                    <div><button onClick={() => playAudio(searchResult[0].phonetics[0].audio)}>Play Sound</button></div>
                                )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Search;
