<script setup lang="ts">
  definePageMeta({
    middleware: 'auth',
  })
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Welcome Section -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-white mb-2">Welcome Back!</h1>
      <p class="text-gray-400 text-lg">Here's your financial overview</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <!-- Total Balance Card -->
      <div
        class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-xl"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <p class="text-blue-100 text-sm mb-1">Total Balance</p>
            <h2 class="text-3xl font-bold text-white">-$3,011</h2>
          </div>
          <div class="bg-blue-500 bg-opacity-50 rounded-lg p-3">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div class="flex items-center text-blue-100 text-sm">
          <span class="text-red-300">↓ 4.3%</span>
          <span class="ml-2">from last month</span>
        </div>
      </div>

      <!-- Total Income Card -->
      <div
        class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <p class="text-gray-400 text-sm mb-1">Total Income</p>
            <h2 class="text-3xl font-bold text-green-400">$6,498</h2>
          </div>
          <div class="bg-green-500 bg-opacity-20 rounded-lg p-3">
            <svg
              class="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
        </div>
        <div class="flex items-center text-gray-400 text-sm">
          <span class="text-green-400">↑ 12.5%</span>
          <span class="ml-2">from last month</span>
        </div>
      </div>

      <!-- Total Expenses Card -->
      <div
        class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <p class="text-gray-400 text-sm mb-1">Total Expenses</p>
            <h2 class="text-3xl font-bold text-red-400">$12,799</h2>
          </div>
          <div class="bg-red-500 bg-opacity-20 rounded-lg p-3">
            <svg
              class="w-6 h-6 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>
          </div>
        </div>
        <div class="flex items-center text-gray-400 text-sm">
          <span class="text-red-400">↑ 8.2%</span>
          <span class="ml-2">from last month</span>
        </div>
      </div>
    </div>

    <!-- Charts and Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      <!-- Spending Chart -->
      <div
        class="lg:col-span-2 bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-semibold text-white">Spending Overview</h3>
          <select
            class="bg-slate-700 text-gray-300 rounded-lg px-3 py-1 text-sm border border-slate-600"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div class="h-64 flex items-end justify-around space-x-2">
          <div class="flex flex-col items-center flex-1">
            <div
              class="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg"
              style="height: 65%"
            ></div>
            <span class="text-gray-400 text-xs mt-2">Mon</span>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div
              class="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg"
              style="height: 45%"
            ></div>
            <span class="text-gray-400 text-xs mt-2">Tue</span>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div
              class="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg"
              style="height: 80%"
            ></div>
            <span class="text-gray-400 text-xs mt-2">Wed</span>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div
              class="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg"
              style="height: 55%"
            ></div>
            <span class="text-gray-400 text-xs mt-2">Thu</span>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div
              class="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg"
              style="height: 90%"
            ></div>
            <span class="text-gray-400 text-xs mt-2">Fri</span>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div
              class="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg"
              style="height: 35%"
            ></div>
            <span class="text-gray-400 text-xs mt-2">Sat</span>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div
              class="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-lg"
              style="height: 50%"
            ></div>
            <span class="text-gray-400 text-xs mt-2">Sun</span>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div
        class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
      >
        <h3 class="text-xl font-semibold text-white mb-6">Quick Actions</h3>
        <div class="space-y-3">
          <button
            class="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 transition flex items-center justify-between"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-blue-500 rounded-lg p-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <span class="font-medium">Add Transaction</span>
            </div>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            class="w-full bg-slate-700 hover:bg-slate-600 text-white rounded-lg p-4 transition flex items-center justify-between"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-purple-500 bg-opacity-20 rounded-lg p-2">
                <svg
                  class="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <span class="font-medium">View Reports</span>
            </div>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            class="w-full bg-slate-700 hover:bg-slate-600 text-white rounded-lg p-4 transition flex items-center justify-between"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-orange-500 bg-opacity-20 rounded-lg p-2">
                <svg
                  class="w-5 h-5 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <span class="font-medium">Manage Categories</span>
            </div>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Recent Transactions & Categories -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Transactions -->
      <div
        class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-semibold text-white">Recent Transactions</h3>
          <a href="#" class="text-blue-400 hover:text-blue-300 text-sm"
            >View all</a
          >
        </div>
        <div class="space-y-4">
          <div
            class="flex items-center justify-between p-3 bg-slate-700 bg-opacity-50 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-red-500 bg-opacity-20 rounded-lg p-2">
                <svg
                  class="w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">A notebook</p>
                <p class="text-gray-400 text-sm">January 22, 2026</p>
              </div>
            </div>
            <span class="text-red-400 font-semibold">-$8,999.00</span>
          </div>
          <div
            class="flex items-center justify-between p-3 bg-slate-700 bg-opacity-50 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-green-500 bg-opacity-20 rounded-lg p-2">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">Gift for me</p>
                <p class="text-gray-400 text-sm">January 22, 2026</p>
              </div>
            </div>
            <span class="text-green-400 font-semibold">+$898.00</span>
          </div>
          <div
            class="flex items-center justify-between p-3 bg-slate-700 bg-opacity-50 rounded-lg"
          >
            <div class="flex items-center space-x-3">
              <div class="bg-red-500 bg-opacity-20 rounded-lg p-2">
                <svg
                  class="w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">For expense</p>
                <p class="text-gray-400 text-sm">January 22, 2026</p>
              </div>
            </div>
            <span class="text-red-400 font-semibold">-$3,800.00</span>
          </div>
        </div>
      </div>

      <!-- Top Categories -->
      <div
        class="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700"
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-semibold text-white">
            Top Spending Categories
          </h3>
          <a href="#" class="text-blue-400 hover:text-blue-300 text-sm"
            >View all</a
          >
        </div>
        <div class="space-y-4">
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300">Shopping</span>
              <span class="text-gray-400 text-sm">$8,999.00</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                style="width: 70%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300">Expenses</span>
              <span class="text-gray-400 text-sm">$3,800.00</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                style="width: 30%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300">Food & Dining</span>
              <span class="text-gray-400 text-sm">$1,250.00</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full"
                style="width: 15%"
              ></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-300">Transport</span>
              <span class="text-gray-400 text-sm">$750.00</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                style="width: 10%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
