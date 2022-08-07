import './FeatureItem.css';

const FeaturedItem = (props) => (
  <div className='feature'>
    <props.icon />
    <h4 className='feature-heading'>{props.title}</h4>
    <p className='feature-text'>{props.text}</p>
  </div>
);

export default FeaturedItem;
