import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      note: "Perfect for steady progress",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF YEARLY",
      note: "Best value for regular members",
      price: 34000,
      length: 6,
      badge: "Most popular",
      featured: true,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      note: "Ideal for long-term transformation",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <div className="pricing-header">
        <p className="pricing-subtitle">Choose the right membership</p>
        <h1>ELITE EDGE FITNESS PLANS</h1>
        <p className="pricing-intro">
          Flexible memberships for every training style, with premium coaching, modern equipment, and seamless support.
        </p>
      </div>

      <div className="wrapper">
        {pricing.map((plan) => (
          <div key={plan.title} className={`card ${plan.featured ? "featured" : ""}`}>
            {plan.badge && <span className="badge">{plan.badge}</span>}
            <img src={plan.imgUrl} alt={plan.title} />

            <div className="title">
              <h1>{plan.title}</h1>
              <p className="plan-note">{plan.note}</p>
              <h3>Rs {plan.price}</h3>
              <p>For {plan.length} Month{plan.length > 1 ? "s" : ""}</p>
            </div>

            <div className="description">
              <p>
                <Check /> Unlimited premium equipment
              </p>
              <p>
                <Check /> Dedicated workout support
              </p>
              <p>
                <Check /> Premium locker access
              </p>
              <p>
                <Check /> 24/7 skilled guidance
              </p>
              <p>
                <Check /> Freeze your plan anytime
              </p>
              <Link to="/">Join Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;