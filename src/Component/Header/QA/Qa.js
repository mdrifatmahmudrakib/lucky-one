import React from 'react';

const Qa = () => {
    return (
        <div className='container text-start mb-5 mt-5'>
            <h1 className='text-center m-3'>Question and Answers</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How React Works?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>React is a JavaScript library, not a framework that creates user interfaces in a predictable and efficient way using declarative code.React Component returns React Elements using JSX here the return value is an object JSX gets converted to React.createElement function calls then each of them returns the appropriate object.React calls function directly with the assigned props and if it is a class React Creates a new instance of the class and calls its render method.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Difference between State and Props
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                i) Props are read-only on the other hand State changes can be asynchronous. <br></br>
                                ii) Props are immutable but State is mutable.<br></br>
                                iii) Props make components reusable but State cannot make components reusable.<br></br>
                                iv) Props can be accessed by the child component on the other hand State cannot be accessed by child components.<br></br>
                                v)Stateless component can have Props , Stateless components cannot have State.

                            </p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Qa;