import java.util.ArrayList;
import java.util.List;
public class EmployeeMainClass
 {
    public static void main(String[] args) 
    {
        Employee emp1 = new Employee(101, "Alice", 50000.0);
        Employee emp2 = new Employee(102, "Bob", 55000.0);
        Employee emp3 = new Employee(103, "Charlie", 60000.0);
        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);
        for(Employee emp:employees)
        {
            emp.displayDetails();
        }
    }
}