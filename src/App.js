import React, { useState } from 'react';

const PlusDownDiv = ({ id, onDelete }) => {

  const [childrenComp, setChildrenComp] = useState([])

  const removeChildById = (childId) => {
    setChildrenComp(childrenComp.filter((childData) => childData.id !== childId));
  };

  const addChild = () => {
    const childrenIds = childrenComp.map((child) => child.id);
    const lastChildrenId = Math.max(0, ...childrenIds);
    setChildrenComp([...childrenComp, { id: lastChildrenId + 1 }]);
  }

  return (
    <div style={{ marginLeft: 10, marginTop:10, fontSize: 20 }}>
      
      <div>
        - {id}
        <button style={{marginLeft: 5, marginRight: 5}} onClick={() => {addChild()}}> + </button>
        <button onClick={() => {onDelete()}}> - </button>
      </div>

      {childrenComp.map((childData) => (
        <PlusDownDiv
          id={childData.id}
          key={childData.id}
          onDelete={() => {
            removeChildById(childData.id);
          }}
        />
      ))}

    </div>
  )
};


const App = () => {
  return (
    <div>
      <PlusDownDiv id={1} onDelete={() => null} />
    </div>
  );
};


export default App;