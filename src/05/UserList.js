import { useState } from 'react';
import Users from './Users';

const USERS = [
  {
    name: 'Lelah Nichols',
    title: 'Troy, MI',
    tags: ['clothes', 'stem'],
    avatar: 'https://img.pokemondb.net/artwork/avif/rowlet.avif',
  },
  {
    name: 'Jesus Weiss',
    title: 'Fort Worth, TX',
    tags: ['headset', 'gadget', 'speed', 'winter'],
    avatar: 'https://img.pokemondb.net/artwork/avif/litten.avif',
  },
  {
    name: 'Annie Rice',
    title: 'Austin, TX',
    tags: ['road', 'mountain', 'trip', 'earth', 'nature'],
    avatar: 'https://img.pokemondb.net/artwork/avif/popplio.avif',
  },
  {
    name: 'Robert Brower',
    title: 'Cincinnati, OH',
    tags: ['Maintenance', 'gears', 'frames', 'repair'],
    avatar: 'https://img.pokemondb.net/artwork/avif/pikipek.avif',
  },
  {
    name: 'Amy Campbell',
    title: 'Warrior, AL',
    tags: ['music', 'disks'],
    avatar: 'https://img.pokemondb.net/artwork/avif/yungoos.avif',
  },
  {
    name: 'Anthony S.Morin',
    title: 'Lyndhurst, NJ',
    tags: ['vintage', 'electric'],
    avatar: 'https://img.pokemondb.net/artwork/avif/magikarp.avif',
  },
];

export default function UserList() {
  const [query, setQuery] = useState('');

  const filteredUsers =
    query.length > 0
      ? USERS.filter((user) => {
          return user.name.toLowerCase().includes(query.toLowerCase());
        })
      : USERS;

  return (
    <div className='flex w-full items-center bg-gray-300 p-8'>
      <div className='rounded-lg bg-white p-[100px] font-poppins'>
        <h1 className='font-merriweather text-3xl font-black mb-8'>Users</h1>

        <nav className='relative flex flex-col gap-4 md:flex-row justify-between mb-16'>
          <div>
            <input
              type='text'
              placeholder='Search users'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='w-full p-4 pl-8 border-2 rounded-md'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='absolute left-2 top-[18px] h-5 w-5 text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>
          </div>

          <div className='flex gap-4 items-center'>
            <button>Reputation</button>
            <button className='rounded-md bg-[#849FFF] px-2 py-3 text-white hover:bg-blue-500'>
              New users
            </button>
            <button>Voters</button>
            <button>Editors</button>
            <button>Moderators</button>
          </div>
          {/* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md */}
        </nav>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {filteredUsers.map((user) => {
            return (
              <Users
                key={user.name}
                name={user.name}
                title={user.title}
                tags={user.tags}
                avatar={user.avatar}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
