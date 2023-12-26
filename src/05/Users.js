export default function Users({ name, title, tags, avatar }) {
  return (
    <div className='flex hover:border-2 rounded-xl hover:shadow-lg p-6 gap-4 hover:cursor-pointer hover:bg-slate-100'>
      <img src={avatar} alt={name} className='h-24 w-24 rounded-full' />

      <div className='space-y-6'>
        <div>
          <h2 className='font-merriweather text-xl font-semibold mb-2'>
            {name}
          </h2>
          <p>{title}</p>
        </div>

        <div className='space-x-1'>
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                className='p-1 text-blue-500 text-sm rounded-xl border-2 inline-block mb-1'
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
