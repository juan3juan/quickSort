using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clustering
{
    class Program
    {
        static void Main(string[] args)
        {
            List<List<int>> result;
            List<int> Original = new List<int>();
            for (int i=0;i<10;i++)
            {
                Original.Add(i);
            }

            Original.Add(10000);
            Original.Add(20000);

            result =Clustering.RunCluster(ClusterAlgrithms.KMean, 3, Original);

            Console.Read();
        }
    }
}
