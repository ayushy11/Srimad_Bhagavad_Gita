import React, { useEffect, useState } from 'react';
import '../styles/Chapter.css';
import ChapterCard from './ChapterCard';

function Chapter() {
    const [chapterInfo, setChapterInfo] = useState([]);

    useEffect(() => {
        fetch('https://vedicscripturesapi.herokuapp.com/gita/chapters')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setChapterInfo(data);
            })
    }, [])

    console.log(chapterInfo);
    return (
        <div className="home__chapter">
            {chapterInfo.map((chapter) => (
                <ChapterCard
                    key={chapter.chapter__number}
                    id={chapter.chapter_number}
                    name={chapter.transliteration}
                    meaning={chapter.meaning.en}
                    summary={chapter.summary.en}
                    verseId={chapter.verses_count}                    
                />
            ))}
        </div>
    )
}

export default Chapter;
