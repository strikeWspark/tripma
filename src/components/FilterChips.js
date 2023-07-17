

const FilterChips = ({name}) => {
return (
    <div className="bg-white text-black rounded-lg border mx-1 px-4 py-2 inline-flex items-center">
                                <span className="mr-2 text-sm">{name}</span>
                                <button type="button" className="text-white">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M6.707 6.293a1 1 0 0 0 0 1.414L9.414 10l-2.707 2.293a1 1 0 0 0 1.414 1.414L11.414 11l2.293 2.707a1 1 0 0 0 1.414-1.414L13.414 10l2.293-2.707a1 1 0 0 0-1.414-1.414L11.414 9 8.707 6.293a1 1 0 0 0-1.414 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
)
}

export default FilterChips;