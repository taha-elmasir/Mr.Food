import { useRef, useEffect } from "react";
import { reveal } from "../../lib";
import "./Features.css";
import FeatureItem from "./FeatureItem";

// Icons
import {
  Healthy,
  Pie,
  World,
  Heart,
  Lock,
  Chef,
} from "../../icons/features/healthy";

const Features = () => {
  const featuresRef = useRef();
  useEffect(() => reveal(featuresRef), [featuresRef]);
  return (
    <section className="features-section hidden" ref={featuresRef}>
      <h2 className="section-heading">
        Mr. Food combines food with modern technology
      </h2>
      <p className="section-subheading">
        Mr. Food AI chooses from 10k recipes and more.
      </p>
      <div className="features">
        <FeatureItem
          title="Our food is healthy and tasty"
          text="Maecenas aliquet tortor ac lorem sagittis, vulputate turpis dictum.
            Pellentesque dapibus vel ex a convallis. Praesent vel pulvinar
            ligula, ac auctor augue."
          icon={Healthy}
        />
        <FeatureItem
          title="Local and organic"
          text="Maecenas aliquet tortor ac lorem sagittis, vulputate turpis dictum.
            Pellentesque dapibus vel ex a convallis. Praesent vel pulvinar
            ligula, ac auctor augue."
          icon={Pie}
        />
        <FeatureItem
          title="World's best healthy Food"
          text="Maecenas aliquet tortor ac lorem sagittis, vulputate turpis dictum.
            Pellentesque dapibus vel ex a convallis. Praesent vel pulvinar
            ligula, ac auctor augue."
          icon={World}
        />
        <FeatureItem
          title="Live a healthier life"
          text="Maecenas aliquet tortor ac lorem sagittis, vulputate turpis dictum.
            Pellentesque dapibus vel ex a convallis. Praesent vel pulvinar
            ligula, ac auctor augue."
          icon={Heart}
        />
        <FeatureItem
          title="Secure payments on Mr.Food"
          text="Maecenas aliquet tortor ac lorem sagittis, vulputate turpis dictum.
            Pellentesque dapibus vel ex a convallis. Praesent vel pulvinar
            ligula, ac auctor augue."
          icon={Lock}
        />
        <FeatureItem
          title="pause your subscription any time"
          text="Maecenas aliquet tortor ac lorem sagittis, vulputate turpis dictum.
            Pellentesque dapibus vel ex a convallis. Praesent vel pulvinar
            ligula, ac auctor augue."
          icon={Chef}
        />
      </div>
    </section>
  );
};

export default Features;
