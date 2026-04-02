interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center w-full">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index + 1 <= currentStep
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`mt-2 text-sm transition-all duration-300 ${
                  index + 1 <= currentStep
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-400'
                }`}
              >
                {index === 0 && 'Basic Info'}
                {index === 1 && 'Education'}
                {index === 2 && 'Course'}
              </span>
            </div>
            {index < totalSteps - 1 && (
              <div className="flex-1 h-1 mx-2 mt-[-24px]">
                <div className="h-full bg-gray-200 rounded">
                  <div
                    className={`h-full rounded transition-all duration-500 ${
                      index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                    }`}
                    style={{
                      width:
                        index + 1 < currentStep
                          ? '100%'
                          : index + 1 === currentStep
                          ? '50%'
                          : '0%',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
