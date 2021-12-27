import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry) {
    import('web-vitals').then((webVitals: typeof import('web-vitals')) => {
      webVitals.getCLS(onPerfEntry);
      webVitals.getFID(onPerfEntry);
      webVitals.getFCP(onPerfEntry);
      webVitals.getLCP(onPerfEntry);
      webVitals.getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
