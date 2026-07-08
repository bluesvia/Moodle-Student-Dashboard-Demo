import { DashboardMetrics } from '../components/DashboardMetrics';
import { HeroCard } from '../components/HeroCard';
import { CalendarWidget } from '../components/CalendarWidget';
import { CourseList } from '../components/CourseList';
import { AssignmentsList } from '../components/AssignmentsList';
import { TasksWidget } from '../components/TasksWidget';
import { SummerCampAnnouncement } from '../components/SummerCampAnnouncement';

export function Dashboard() {
  return (
    <>
      <DashboardMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12 items-start">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <HeroCard />
          <CourseList />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
          <SummerCampAnnouncement />
          <CalendarWidget />
          <AssignmentsList />
          <TasksWidget />
        </div>
      </div>
    </>
  );
}
