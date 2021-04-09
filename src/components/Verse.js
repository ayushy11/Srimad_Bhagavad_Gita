import React, { useEffect, useState } from 'react';
import '../styles/Verse.css';
import VerseCard from './VerseCard';

function Verse() {
    const [verseInfo, setVerseInfo] = useState([]);
    const [meaning, setMeaning] = useState([]);

    useEffect(() => {
        fetch('https://vedicscripturesapi.herokuapp.com/gita')
            .then((response) => response.json())
            .then((data) => {                
                setVerseInfo(data);
                setMeaning(data.siva);
            })
    }, [])

    return (
        <div className="home__verse">            
            <VerseCard
                    id={verseInfo.verse}
                    content={meaning.et}
                    verse={verseInfo.slok}
                    meaning={verseInfo.transliteration}
                />
        </div>
    )
}

export default Verse;
