const TeamSection = ({ title, teamMembers }) => {
  return (
    <div className="flex  flex-col  items-center justify-center w-full pb-3">

      <div className="w-full  gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col   justify-center items-center  mx-auto"
          >
            <img
              src={member.pic}
              alt={member.name}
              className="rounded-full filter  w-[8rem] sm:w-[15rem] h-max"
            
            />
            <p
              className={`mt-4 text-[#d6d6d6] font-semibold text-center font-exo tracking-wider`}
            >
              {member.name}
            </p>
            <p className="text-center text-[#d6d6d6] font-semibold text-[.85rem] font-syne ">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
