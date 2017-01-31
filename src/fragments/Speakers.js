import React, {PropTypes} from 'react';
import Icon from '../components/Icon'
import enhanceCollection from "phenomic/lib/enhance-collection"

export default class Speakers extends React.Component {
  static contextTypes = {
    collection: PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      collection,
    } = this.context

    let speakers = enhanceCollection(collection, {
      filter: { speaker: 'yes' }
    });

    return (
      <div className="tc mw80 center tl-l">
        <h2 className="section__title section__title--speakers">
          Speakers
        </h2>
        <p className="copy--speakers">
          A list of talented smart people
          that want to share their
          knowledge with us
        </p>
        <div className="flex flex-wrap justify-center">
          {
            speakers.map((speaker, i) => {
              return (
                <div className="speaker__container mb5 w5-l tc" key={`${speaker.name}-${i}`}>
                  { speaker.photo &&
                    <img src={require(`../../src/assets/speakers/${speaker.photo}`)} alt={speaker.name} className="br-100"/>
                  }
                  <p className="eau-book f-4 bright-green ttu">{speaker.name}</p>
                  <p className="f-c-t white">{speaker.role} @ {speaker.company}</p>
                  <p className="f-c-t white">{speaker.talk}</p>
                  { speaker.twitter &&
                    <a href={`https://twitter.com/${speaker.twitter}`} className="green4 dib h-2 w-2-5 br-100 pa2 bg-white mr2">
                      <Icon icon="twitter"></Icon>
                    </a>
                  }
                  { speaker.website &&
                    <a href={speaker.website} className="green4 dib h-2 w-2-5 br-100 pa2 bg-white ml2">
                      <Icon icon="link"></Icon>
                    </a>
                  }
                </div>
              )
            })
          }
        </div>
      </div>);
  }
}

Speakers.propTypes = {
};