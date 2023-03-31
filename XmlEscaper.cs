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

using System.Text.RegularExpress8ions;

string xmlString = "<root><message>hello I have 27%be</message></root>";
string pattern = @"%[0-9a-fA-F]{2}";
string escapedXmlString = Regex.Replace(xmlString, pattern, m => "&#x" + m.Value.Substring(1) + ";");


/////////////////


string xmlString = "<root><message>hello I have 27%be</message></root>";
StringBuilder escapedXmlBuilder = new StringBuilder();
foreach (char c in xmlString)
{
    switch (c)
    {
        case '<':
            escapedXmlBuilder.Append("&lt;");
            break;
        case '>':
            escapedXmlBuilder.Append("&gt;");
            break;
        case '&':
            escapedXmlBuilder.Append("&amp;");
            break;
        case '\'':
            escapedXmlBuilder.Append("&apos;");
            break;
        case '\"':
            escapedXmlBuilder.Append("&quot;");
            break;
        case '%':
            if (xmlString.IndexOf(c) < xmlString.Length - 2 && Uri.IsHexDigit(xmlString[xmlString.IndexOf(c) + 1]) && Uri.IsHexDigit(xmlString[xmlString.IndexOf(c) + 2]))
            {
                escapedXmlBuilder.Append("&#x" + xmlString.Substring(xmlString.IndexOf(c) + 1, 2) + ";");
                break;
            }
            else
            {
                goto default;
            }
        default:
            escapedXmlBuilder.Append(c);
            break;
    }
}
string escapedXmlString = escapedXmlBuilder.ToString();
