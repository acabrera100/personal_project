import React from "react";
import "../CSS/Dashboard.css";
import Modal from "react-modal";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="dashboard">
        <p>
          Hello this is the dashboard where all of your posts and feed from
          other people show up. This should be the page it routes you to after
          you login where it is your blog.\
        </p>
        <div className="test">
          <div className="avatar">
            <img
              src="https://img.icons8.com/dotty/80/000000/user-male.png"
              alt="something"
            />
          </div>
          <div className="post_type">
            <button onClick={this.openModal}>
              <img
                className ="postImage"
                src="https://img.icons8.com/material-outlined/24/000000/text.png"
                alt="text"
              />
            </button>
            <Modal
              className="modal-content"
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)}>title</h2>
              <form>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Your Text Here" />
                <input type="text" placeholder="tags" />
              </form>
              <button onClick={this.closeModal}>close</button>
              <button>Submit</button>
            </Modal>

            <button onClick={this.openModal}>
              <img
                className ="postImage"
                src="https://img.icons8.com/material-outlined/24/000000/headphones.png"
                alt="audio"
              />
            </button>
            <Modal
              className="modal-content"
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)}>
                Add an image by inserting the URL
              </h2>
              <form>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Your Text Here" />
                <input type="text" placeholder="tags" />
              </form>
              <button onClick={this.closeModal}>close</button>
              <button>Submit</button>
            </Modal>

            <button onClick={this.openModal}>
              <img
                className ="postImage"
                src="https://img.icons8.com/material-outlined/24/000000/compact-camera.png"
                alt="pictya"
              />
            </button>
            <Modal
              className="modal-content"
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)}>
                Add an image by inserting the URL
              </h2>
              <form>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Your Text Here" />
                <input type="text" placeholder="tags" />
              </form>
              <button onClick={this.closeModal}>close</button>
              <button>Submit</button>
            </Modal>

            <button onClick={this.openModal}>
            <img
              className ="postImage"
              src="https://img.icons8.com/material-outlined/24/000000/documentary.png"
              alt="video"
            />
            </button>
            <Modal
              className="modal-content"
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
            >
              <h2 ref={subtitle => (this.subtitle = subtitle)}>
                Something else
              </h2>
              <form>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Your Text Here" />
                <input type="text" placeholder="tags" />
              </form>
              <button onClick={this.closeModal}>close</button>
              <button>Submit</button>
            </Modal>

          </div>
        </div>
        <p>
          {" "}
          Here is where all the posts should render. Ive not put anything here
          yet because it should fill on its own I believe when a call is made
          from the back-end Something like getallPosts & from the people you
          follow to getRandomFollowerPost{" "}
        </p>
      </div>
    );
  }
}
