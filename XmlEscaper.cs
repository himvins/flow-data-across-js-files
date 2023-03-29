string xmlString = "<root><message>hello I have 27%be</message></root>";
StringBuilder sb = new StringBuilder();
XmlWriterSettings settings = new XmlWriterSettings();
settings.ConformanceLevel = ConformanceLevel.Fragment;

using (StringWriter stringWriter = new StringWriter(sb))
using (XmlWriter xmlWriter = XmlWriter.Create(stringWriter, settings))
{
xmlWriter.WriteRaw(xmlString);
xmlWriter.Flush();
}

string escapedXmlString = sb.ToString();

/////////////////////////////////////////////////

using System.Text.RegularExpressions;

string xmlString = "<root><message>hello I have 27%be</message></root>";
string pattern = @"%[0-9a-fA-F]{2}";
string escapedXmlString = Regex.Replace(xmlString, pattern, m => "&#x" + m.Value.Substring(1) + ";");
