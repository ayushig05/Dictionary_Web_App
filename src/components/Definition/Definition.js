import React from "react";
import "./Definition.css";

const Definition = ({ word, category, meanings, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ 
            backgroundColor: "#fff", 
            borderRadius: 10 
          }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser dosen't support audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ 
                  backgroundColor: lightMode ? "#3b5360" : "white", 
                  color: lightMode ? "white" : "black" 
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ 
                  backgroundColor: "black", 
                  width: "100%" 
                  }} 
                />
                {def.example && (
                  <span>
                    <b>Example : </b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
