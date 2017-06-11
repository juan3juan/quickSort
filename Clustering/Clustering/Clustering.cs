using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clustering
{
    delegate List<List<int>> clustermethod(int _clusters, List<int> _source);
    enum ClusterAlgrithms
    {
        KMean
    }
    class Clustering
    {
        public static List<List<int>> RunCluster(ClusterAlgrithms _al,int _clusters ,List<int> _source)
        {
            if (_clusters < 1)
                throw new Exception("Invalid Clusters");
            else
            {
                if (_clusters == 1)
                {
                    List<List<int>> result = new List<List<int>>();
                    result.Add(_source);
                    return result;
                }
                else
                {
                    clustermethod Method = new clustermethod(KMeanCluster); ;
                    return Method(_clusters, _source);
                }
            }
        }

        private static List<List<int>> KMeanCluster(int _clusters, List<int> _source)
        {
            List<List<int>> result = new List<List<int>>();
            bool changed = true;
            for (int i=0;i<_clusters;i++)
            {
                result.Add( new List<int>());
            }

            List<double> meanvalues = StartValues(_clusters, _source, _source.Count);  // just select three initial meanvalues use random method
            for (int i=0;i<_source.Count;i++)
            {
                int index = closetindex(_source[i], meanvalues);  // initial divide the source data to three clusters
                result[index].Add(_source[i]);
            }


            while (changed)
            {
                meanvalues= result.Select(i => i.Average()).ToList();
                result = looping(meanvalues, _source, result, out changed);
            }
            return result;
        }

        private static int closetindex(int target, List<double> values)
        {

            values =values.Select(i => Math.Abs(i - target)).ToList();    // why i can be used here directly without definition and i is the three meanvalues
            return values.IndexOf(values.Min());                          // IndexOf return the index of min abs value among the three meanvalues
            
        }

        private static List<List<int>> looping(List<double> _meanvalues, List<int> _source, List<List<int>> _values, out bool changed)
        {
            List<List<int>> result = new List<List<int>>();
            for (int i = 0; i < _values.Count; i++)
            {
                result.Add(new List<int>());
            }

            changed = false;
            for (int i = 0; i < _source.Count; i++)
            {
                int ids = closetindex(_source[i], _meanvalues);
                result[ids].Add(_source[i]);      
                if (!_values[ids].Contains(_source[i]))
                    changed = true;
            }
            return result;
        }
        private static List<double> StartValues(int _clusters, List<int> _source, int _max,int _min=0)
        {
            List<double> Positions = new List<double>();
            Random random = new Random();
            while (Positions.Count< _clusters)
            {
                int position = random.Next(_min, _max);
                if (!Positions.Contains(_source[position]))
                    Positions.Add(_source[position]);
            }
            return Positions;
        }
    }
}
