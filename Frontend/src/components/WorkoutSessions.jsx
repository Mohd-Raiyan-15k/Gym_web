import { Dumbbell, Heart, Zap, Target, Users, Clock } from "lucide-react";

const WorkoutSessions = () => {
  const workoutSessions = [
    {
      id: 1,
      title: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive weight training programs. Perfect for beginners and advanced lifters alike.",
      duration: "60 min",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      icon: <Dumbbell className="w-8 h-8 text-blue-500" />,
      features: ["Free weights", "Resistance machines", "Progressive overload", "Personal guidance"]
    },
    {
      id: 2,
      title: "Cardio Fitness",
      description: "Improve cardiovascular health and burn calories with our dynamic cardio sessions including treadmills, ellipticals, and cycling.",
      duration: "45 min",
      level: "Beginner to Advanced",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36OemLArTXfbGKfw927PkAsGB1WjQZRqQ3w&s",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      features: ["Treadmills", "Stationary bikes", "Ellipticals", "Heart rate monitoring"]
    },
    {
      id: 3,
      title: "HIIT Workouts",
      description: "High-Intensity Interval Training for maximum calorie burn in minimum time. Short, intense bursts followed by recovery periods.",
      duration: "30 min",
      level: "Intermediate",
      image: "https://hips.hearstapps.com/hmg-prod/images/man-using-medicine-ball-at-cross-training-gym-royalty-free-image-1617118485.?crop=0.669xw:1.00xh;0.0505xw,0&resize=1200:*",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      features: ["Maximum calorie burn", "Time efficient", "Improves metabolism", "Builds endurance"]
    },
    {
      id: 4,
      title: "Yoga & Flexibility",
      description: "Enhance flexibility, reduce stress, and improve mental well-being through our guided yoga and stretching sessions.",
      duration: "60 min",
      level: "All Levels",
      image: "https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg",
      icon: <Target className="w-8 h-8 text-green-500" />,
      features: ["Stress reduction", "Improved flexibility", "Mind-body connection", "Various styles available"]
    },
    {
      id: 5,
      title: "CrossFit Training",
      description: "Functional fitness training combining weightlifting, gymnastics, and metabolic conditioning for total body transformation.",
      duration: "45 min",
      level: "Intermediate to Advanced",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvc3NmaXR8ZW58MHx8MHx8fDA%3D",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      features: ["Functional movements", "Community atmosphere", "Scalable workouts", "Olympic lifting"]
    },
    {
      id: 6,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals, whether it is weight loss, muscle gain, or sports performance.",
      duration: "50 min",
      level: "All Levels",
      image: "https://thumbs.dreamstime.com/b/gym-trainer-motivating-client-professional-to-lift-dumbbell-47295799.jpg",
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      features: ["Customized programs", "Individual attention", "Goal tracking", "Nutrition guidance"]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Workout Sessions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of fitness programs designed to help you achieve your health and wellness goals.
            From strength training to yoga, we have something for everyone.
          </p>
        </div>

        {/* Featured Workout Hero */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Transform Your Body, Transform Your Life</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our expert trainers and state-of-the-art facilities provide the perfect environment for your fitness journey.
                Whether you are just starting out or looking to push your limits, we have the tools and knowledge to help you succeed.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Certified Trainers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Modern Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Community Support</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-fit">
                Start Your Journey Today
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Gym workout session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
            </div>
          </div>
        </div>

        {/* Workout Sessions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workoutSessions.map((session) => (
            <div key={session.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {session.icon}
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {session.duration}
                </div>
              </div>

              <div className="p-6 space-y-[10px]">
                <h3 className="text-xl font-bold text-gray-800">{session.title}</h3>
                <p className="text-gray-600 mb-[10px]">{session.description}</p>

                <div className="mb-[10px]">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {session.level}
                  </span>
                </div>

                <div className="space-y-2 mb-[10px]">
                  <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {session.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
                  Join Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of members who have transformed their lives through our comprehensive workout programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Book a Free Trial
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
              View Class Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;