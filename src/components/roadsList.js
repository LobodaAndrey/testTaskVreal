import React, { Component } from 'react';
import './roadList.scss';

class RoadsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roads: [
        {
          id: 1,
          title: 'Title 1',
          isFavorite: true,
          isActive: false,
          length: 1.27,
          shortDescription: 'Short description Lorem ipsum',
          fullDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla perspiciatis saepe provident veritatis repellendus dignissimos nesciunt odio iure eum, itaque nemo soluta cupiditate, ipsa recusandae. Cum ullam vel eum neque.',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla perspiciatis saepe provident veritatis repellendus dignissimos nesciunt odio iure eum, itaque nemo soluta cupiditate, ipsa recusandae. Cum ullam vel eum neque.',
          path: '',
        },
        {
          id: 2,
          title: 'Title 2',
          isFavorite: false,
          isActive: true,
          length: 1.55,
          shortDescription: 'Short description Lorem ipsum',
          fullDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla perspiciatis saepe provident veritatis repellendus dignissimos nesciunt odio iure eum, itaque nemo soluta cupiditate, ipsa recusandae. Cum ullam vel eum neque.',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla perspiciatis saepe provident veritatis repellendus dignissimos nesciunt odio iure eum, itaque nemo soluta cupiditate, ipsa recusandae. Cum ullam vel eum neque.',
          path: '',
        },
        {
          id: 3,
          title: 'Title 3',
          isFavorite: false,
          isActive: false,
          length: 2.9,
          shortDescription: 'Short description Lorem ipsum',
          fullDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla perspiciatis saepe provident veritatis repellendus dignissimos nesciunt odio iure eum, itaque nemo soluta cupiditate, ipsa recusandae. Cum ullam vel eum neque.',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla perspiciatis saepe provident veritatis repellendus dignissimos nesciunt odio iure eum, itaque nemo soluta cupiditate, ipsa recusandae. Cum ullam vel eum neque.',
          path: '',
        },
        {
          id: 4,
          title: 'Title 4',
          isFavorite: false,
          isActive: false,
          length: 2.55,
          shortDescription: 'Short description Lorem ipsum',
          fullDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla perspiciatis saepe provident veritatis repellendus dignissimos nesciunt odio iure eum, itaque nemo soluta cupiditate, ipsa recusandae. Cum ullam vel eum neque.',
          path: '',
        }
      ]
    }
  }

  switchActiveRoad = (index) => {
    console.log('changed' + index)
  }

  render() {
    const { roads } = this.state
    return (
      <React.Fragment>
        <input type="search" name="search" id="" placeholder="Search..." />
        <ul>
          {roads.map((el) => (
            <li onClick={() => this.switchActiveRoad(el.id)} key={el.title+el.shortDescription} className={el.isActive ? "active road-item": "road-item"}>
              <div className="road">
                <i className="fas fa-arrows-alt"></i>
              </div>
              <div className="road-info">
                <div className="road-title">
                  {el.isFavorite && <i className="fas fa-star"></i>}
                  <h3>{el.title}</h3>
                </div>
                <p>{el.shortDescription = el.shortDescription.substr(0, 80)}</p>
              </div>
              <div className="path-length">
                {el.length}
              </div>
              <i className="fas fa-chevron-right"></i>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default RoadsList;