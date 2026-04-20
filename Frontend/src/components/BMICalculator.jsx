import { useState } from "react";
import { toast } from "react-toastify";
import { Calculator, User, Ruler, Weight, Activity } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let category = "";
    if (bmiValue < 18.5) {
      category = "Underweight";
      toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      category = "Normal Weight";
      toast.success("You have normal weight. Keep maintaining a healthy lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      category = "Overweight";
      toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
    } else {
      category = "Obese";
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
    }
    setBmiCategory(category);
  };

  const getBMICategoryColor = (category) => {
    switch (category) {
      case "Underweight": return "text-blue-600 bg-blue-50";
      case "Normal Weight": return "text-green-600 bg-green-50";
      case "Overweight": return "text-yellow-600 bg-yellow-50";
      case "Obese": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            BMI Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your Body Mass Index and get personalized health insights to maintain a healthy lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-blue-500" />
                Calculate Your BMI
              </h2>

              <form onSubmit={calculateBMI} className="space-y-6">
                {/* Height Input */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Ruler className="w-4 h-4" />
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Weight Input */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Weight className="w-4 h-4" />
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Gender Select */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <User className="w-4 h-4" />
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 bg-white"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Calculate Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Calculate BMI
                </button>
              </form>
            </div>

            {/* BMI Result */}
            {bmi && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Your BMI Result</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">{bmi}</div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getBMICategoryColor(bmiCategory)}`}>
                    {bmiCategory}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* BMI Categories Chart */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BMI Categories</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <div>
                    <div className="font-semibold text-blue-800">Underweight</div>
                    <div className="text-sm text-blue-600">Less than 18.5</div>
                  </div>
                  <div className="text-blue-600 font-bold">&lt; 18.5</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <div>
                    <div className="font-semibold text-green-800">Normal Weight</div>
                    <div className="text-sm text-green-600">18.5 - 24.9</div>
                  </div>
                  <div className="text-green-600 font-bold">18.5 - 24.9</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
                  <div>
                    <div className="font-semibold text-yellow-800">Overweight</div>
                    <div className="text-sm text-yellow-600">25.0 - 29.9</div>
                  </div>
                  <div className="text-yellow-600 font-bold">25.0 - 29.9</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                  <div>
                    <div className="font-semibold text-red-800">Obese</div>
                    <div className="text-sm text-red-600">30.0 and above</div>
                  </div>
                  <div className="text-red-600 font-bold">≥ 30.0</div>
                </div>
              </div>
            </div>

            {/* Health Tips */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Health Tips</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintain a balanced diet with plenty of fruits and vegetables</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Stay hydrated and aim for at least 30 minutes of exercise daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consult healthcare professionals for personalized advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Track your progress and celebrate small achievements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;