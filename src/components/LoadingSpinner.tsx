
const LoadingSpinner = () => {
    return (
  <div className="flex justify-center py-16">
  <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-200 border-t-[#ff3f6c]" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>
    )
        

}

export default LoadingSpinner;