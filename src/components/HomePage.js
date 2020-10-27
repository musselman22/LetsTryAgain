import React from 'react';

const HomePage = () => {
    return(
        <div className="container">
        <header className="py-5 bg-image-full" style={{backgroundImage: "url('https://images.unsplash.com/photo-1588064643233-49210b27b82e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80')"}}>
          <img className="img-fluid d-block mx-auto" src="http://placehold.it/200x200&text=Logo" alt=""/>
        </header>
  
        <section className="py-5">
          <div className="container">
            <h1>Section Heading</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
          </div>
        </section>
  
        <div className="py-5 bg-image-full" style={{backgroundImage: "url('https://images.unsplash.com/photo-1588064643233-49210b27b82e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80')"}}>
          <div style={{height: "200px"}}></div>
        </div>
  
        <section className="py-5">
          <div className="container">
            <h1>Section Heading</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
          </div>
        </section>
  
        <footer className="py-5 bg-dark" style={{position: "fixed", bottom: "0px", left: "0px", right: "0px"}}>
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Expert Finder 2020</p>
          </div>
        </footer>
      </div>
    );
}

export default HomePage; 