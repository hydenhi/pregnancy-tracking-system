using backend.Dtos.Revenue;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Repository.Interface
{
    public interface IRevenueRepository
    {
        Task<decimal> GetTotalRevenueAsync(DateTime? startDate = null, DateTime? endDate = null);
        Task<IEnumerable<DailyRevenueDto>> GetDailyRevenueAsync(DateTime startDate, DateTime endDate);
        Task<IEnumerable<MonthlyRevenueDto>> GetMonthlyRevenueAsync(int year);
        Task<IEnumerable<PlanRevenueDto>> GetRevenueByPlanAsync(DateTime? startDate = null, DateTime? endDate = null);
        Task<int> GetTotalTransactionsAsync(DateTime? startDate = null, DateTime? endDate = null);
    }
}
