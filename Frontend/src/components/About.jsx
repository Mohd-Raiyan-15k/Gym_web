function About() {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="divide-y dark:divide-gray-300">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What services does our gym offer?</h3>
				<p className="md:pl-0 md:col-span-7">Our gym provides comprehensive fitness services including state-of-the-art equipment, group fitness classes, personal training sessions, nutrition counseling, and wellness programs. We cater to all fitness levels from beginners to advanced athletes.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What equipment and facilities are available?</h3>
				<p className="md:pl-0 md:col-span-7">We feature modern cardio machines, free weights, strength training equipment, functional training areas, yoga studios, and locker rooms with sauna facilities. Our equipment is regularly maintained and updated to ensure safety and effectiveness.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Do you offer personal training services?</h3>
				<p className="md:pl-0 md:col-span-7">Yes! Our certified personal trainers create customized workout plans tailored to your goals, whether you are looking to lose weight, build muscle, improve endurance, or prepare for sports competitions. Sessions can be booked individually or in packages.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What are your membership options and pricing?</h3>
				<p className="md:pl-0 md:col-span-7">We offer flexible membership plans including monthly, quarterly, and annual options. Student and senior discounts are available. All memberships include access to facilities, group classes, and member perks. Contact us for current pricing and special promotions.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What are your operating hours?</h3>
				<p className="md:pl-0 md:col-span-7">We are open 7 days a week: Monday-Friday 5:00 AM - 11:00 PM, Saturday 6:00 AM - 10:00 PM, and Sunday 8:00 AM - 8:00 PM. Group classes are scheduled throughout the day, and our staff is available during all operating hours.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Do you offer a free trial or guest pass?</h3>
				<p className="md:pl-0 md:col-span-7">Absolutely! We offer a complimentary 7-day trial membership for new members to experience our facilities and classes. Guest passes are also available for a small fee. This allows you to try our gym before committing to a membership.</p>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default About