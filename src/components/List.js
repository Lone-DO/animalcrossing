import React from "react";

const List = props => {
  const { Original, NewLeaf, CityFolk } = props.audioData;

  const Display = obj => {
    let body = [];
    let children = [];
    Object.keys(obj).map(playlist => {
      if (
        playlist === "Normal" ||
        playlist === "Raining" ||
        playlist === "Winter" ||
        playlist === "City"
      ) {
        for (let song in obj[playlist]) {
          let link = obj[playlist][song];
          children.push(
            <div>
              <i>{song}</i>
              <a href={link}>
                <i className="material-icons">cloud_download</i>
              </a>
            </div>
          );
        }

        body.push(
          <div className="downloads_list">
            <h5>{playlist}</h5>
            <section>{[...children]}</section>
          </div>
        );
        children = [];
      }
      return body;
    });
    return body;
  };
  // eslint-disable-next-line
  const OriginalList = Display(Original);
  // eslint-disable-next-line
  const NewLeafList = Display(NewLeaf);
  // eslint-disable-next-line
  const CityFolkList = Display(CityFolk);
  return (
    <ol className="downloads">
      <li>List of Music</li>
      <li>
        <h4 className="downloads_title">Animal Crossing</h4>
        {OriginalList}
      </li>
      <li>
        <h4 className="downloads_title">Animal Crossing: New Leaf</h4>
        {NewLeafList}
      </li>
      <li>
        <h4 className="downloads_title">Animal Crossing: City Folk</h4>
        {CityFolkList}
      </li>
    </ol>
  );
};

export default List;
