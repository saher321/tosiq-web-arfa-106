import React from 'react'
import AdminLayout from '../layouts/AdminLayout'

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className='bg-gray-100 border border-gray-200 p-4 rounded-lg min-h-[140px]'>
        <div className='text-3xl font-bold'>
          Welcome back, John
        </div>
        <p className='text-gray-700 text-sm mt-2'>
          Explore top LMS (Learning Management Systems) and online learning platforms for effective training, development, and skill enhancement in your organization.
        </p>
      </div>
    </AdminLayout>
  )
}

export default Dashboard